import { ImageListItem, ImageListItemBar } from "@mui/material"

const Image = (props) => {
  const { item, index } = props
  return (
    <ImageListItem key={index}>
      <img
        src={item.imageLink} // Corrected the property to match the backend response
        alt={item.category}
        loading='lazy'
        style={{
          borderRadius: 8,
          width: "100%",
          height: "auto",
        }}
      />
      <ImageListItemBar
        title={item.title}
        subtitle={
          item.description ? (
            <span style={{ opacity: 1 }}>{item.description}</span>
          ) : null
        }
        sx={{
          bgcolor: "rgba(0, 0, 0, 0.5)",
          borderRadius: "0 0 8px 8px",
          height: "auto",
          minHeight: "60px",
          display: "flex",
          alignItems: "center",
          padding: 1,
          textAlign: "left",
          "& .MuiImageListItemBar-title": {
            opacity: 0.8,
          },
          "& .MuiImageListItemBar-subtitle": {
            opacity: 0.8,
          },
        }}
      />
    </ImageListItem>
  )
}

export default Image
