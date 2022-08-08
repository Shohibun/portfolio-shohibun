import React from 'react';
import $ from "jquery";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Portfolio';

class App extends React.Component{
  componentDidMount() {
    $("#project").click(function() {
      $("html, body").animate(
        {
          scrollTop: $("#id-project").offset().top - 70,
        },
        1000
      );
    });
  };

  render() {
    return(
      <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Layout />} />
      </Routes>
      </BrowserRouter>
    )
  }
};

export default App;
