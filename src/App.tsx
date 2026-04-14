/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { HashRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { HomePage } from './pages/Home';
import { LessonDetailsPage } from './pages/LessonDetails';
import { PricesPage } from './pages/Prices';
import { TestimonialsPage } from './pages/Testimonials';
import { AboutPage } from './pages/About';

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="lessons" element={<LessonDetailsPage />} />
          <Route path="prices" element={<PricesPage />} />
          <Route path="testimonials" element={<TestimonialsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
