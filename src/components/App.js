import React, { useState } from 'react';

import { Header } from './Header';
import { Schedule } from './Schedule';
import { Groups } from './Groups';
import { Profile } from './Profile';
import { Footer } from './Footer';

import { Route, Routes, Outlet } from 'react-router-dom';

export default function App(props) {
  return (
    <body className="Studify">
      <Header />
      {/* <Schedule /> */}
      {/* <Groups /> */}
      <Profile />
      <Footer />
    </body>
  );
}