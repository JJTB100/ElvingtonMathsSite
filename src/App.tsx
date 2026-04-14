/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { LessonDetailsPage } from './pages/LessonDetails';
import { PricesPage } from './pages/Prices';
import { TestimonialsPage } from './pages/Testimonials';
import { AboutPage } from './pages/About';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lessons" element={<LessonDetailsPage />} />
          <Route path="prices" element={<PricesPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
