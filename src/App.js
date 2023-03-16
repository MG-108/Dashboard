import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import { Navbar, Footer, Sidebar, ThemeSettings } from "./components";

import ThemeSettingsButton from "./components/Buttons/ThemeSettingsButton";

import { useStateContext } from "./contexts/ContextProvider";

const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Orders = lazy(() => import("./pages/Orders"));
const Calendar = lazy(() => import("./pages/Calendar"));
const Customers = lazy(() => import("./pages/Customers"));
const Kanban = lazy(() => import("./pages/Kanban"));
const ColorPicker = lazy(() => import("./pages/ColorPicker"));
const Editor = lazy(() => import("./pages/Editor"));
const Employees = lazy(() => import("./pages/Employees"));

const Line = lazy(() => import("./pages/Charts/Line"));
const ColorMapping = lazy(() => import("./pages/Charts/ColorMapping"));
const Pyramid = lazy(() => import("./pages/Charts/Pyramid"));
const Area = lazy(() => import("./pages//Charts/Area"));
const Bar = lazy(() => import("./pages/Charts/Bar"));
const Pie = lazy(() => import("./pages/Charts/Pie"));
const Financial = lazy(() => import("./pages/Charts/Financial"));

const App = () => {
  const {
    activeMenu,
    themeSettings,
    setCurrentColor,
    currentMode,
    setCurrentMode,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");

    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <Router>
        <div className="flex relative dark:bg-main-dark-bg">
          <ThemeSettingsButton />

          {/* SIDEBAR */}
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white">
              <Sidebar />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          <div
            className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${
              activeMenu ? "md:ml-72" : "flex-2"
            }`}
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>

            <div>
              {themeSettings ? <ThemeSettings /> : ""}
              <Routes>
                <Suspense fallback={<h2>Loading</h2>}>
                  {/* DashBoard */}
                  <Route path="/" element={<Ecommerce />} />
                  <Route path="/ecommerce" element={<Ecommerce />} />
                  {/* Pages */}
                  <Route path="/orders" element={<Orders />} />
                  <Route path="/employees" element={<Employees />} />
                  <Route path="/customers" element={<Customers />} />

                  {/* Apps */}
                  <Route path="/kanban" element={<Kanban />} />
                  <Route path="/editor" element={<Editor />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/color-picker" element={<ColorPicker />} />

                  {/* Charts */}
                  <Route path="/line" element={<Line />} />
                  <Route path="/area" element={<Area />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/financial" element={<Financial />} />
                  <Route path="/color-mapping" element={<ColorMapping />} />
                  <Route path="/pyramid" element={<Pyramid />} />
                </Suspense>
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;
