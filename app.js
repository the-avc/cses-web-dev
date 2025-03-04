const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const compression = require('compression')
const path = require('path')
const bodyParser = require('body-parser')
const ExpressMongoSanitize = require('express-mongo-sanitize')
const session = require('express-session')
const MongoStore = require('connect-mongodb-session')(session)
const api = require('./api.js')
const { notFound, errorHandler } = require('../middleware/index.middleware.js')

const bootstrapExpress = (app, mongooseConnection) => {
  // Security Middleware
  app.use(ExpressMongoSanitize())
  app.disable('x-powered-by')
  app.use(helmet())
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
  app.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", "'trusted-cdn.com'"],
        objectSrc: ["'none'"],
        upgradeInsecureRequests: [],
      },
    })
  )
  app.use(helmet.hsts({ maxAge: 31536000, includeSubDomains: true }))

  // Parsing and Compression
  app.use(express.json())
  app.use(compression())
  app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }))

  // CORS Configuration
  const corsOptions = {
    origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173',
    credentials: true, // Ensure credentials (cookies) are allowed
  }
  app.use(cors(corsOptions))

  // Session Configuration
  const sessionOptions = {
    secret: process.env.SESSION_SECRET || 'default_secret_key',
    resave: false, // Resave only when the session is modified
    saveUninitialized: false, // Do not save uninitialized sessions
    cookie: {
      maxAge: 14 * 24 * 60 * 60 * 1000, // 14 days
      httpOnly: true, // Prevent client-side JS from accessing the cookie
      secure: false,
      sameSite: process.env.NODE_ENV === 'production' ? 'Lax' : 'None', // Cross-site cookies in dev
    },
    store: new MongoStore({
      uri: process.env.MONGODB_URI, // MongoDB URI for session storage
      collection: 'sessions',
    }),
  }

  // Only allow secure cookies in production and when using HTTPS
  if (process.env.NODE_ENV === 'production' && process.env.USE_HTTPS !== 'true') {
    sessionOptions.cookie.secure = false;
  }

  app.use(session(sessionOptions))

  // Routes and Error Handling
  app.use('/api/', api)
  // Serve Static Files
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../../../cses-website-mfe/dist')))
    app.get('/*', (req, res) =>
      res.sendFile(path.join(__dirname, '../../../cses-website-mfe/dist', 'index.html'))
    )
  }
  app.use(notFound)
  app.use(errorHandler)
}

module.exports = { bootstrapExpress }
