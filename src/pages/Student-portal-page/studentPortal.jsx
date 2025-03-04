import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeTab from '@/features/users/HomeTab/homeTab'
import EventsTab from '@/features/users/EventsTab/EventsTab'
import PaymentTab from '@/features/users/PaymentTab/paymentTab'
import FooterSP from '@/features/users/footerSP/FooterSP'
import Navbar from '@/components/landing/Navbar'

const StudentPortal = () => {
    return (
        <>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path='./' element={<HomeTab />} />
                    <Route path='./EventsTab' element={<EventsTab />} />
                    <Route path='./PaymentTab' element={<PaymentTab />} />
                </Routes>
                <FooterSP />
            </BrowserRouter>
        </>
    )
}

export default StudentPortal