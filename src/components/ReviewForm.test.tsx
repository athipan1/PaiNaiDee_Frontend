import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ReviewForm from './ReviewForm';
import i18n from '../i18n';
import { I18nextProvider } from 'react-i18next';

describe('ReviewForm', () => {
  it('renders the form correctly', () => {
    render(
      <I18nextProvider i18n={i18n}>
        <ReviewForm />
      </I18nextProvider>
    );

    expect(screen.getByLabelText('ชื่อของคุณ')).toBeInTheDocument();
    expect(screen.getByLabelText('ให้คะแนน')).toBeInTheDocument();
    expect(screen.getByLabelText('ความคิดเห็น')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'ส่งรีวิว' })).toBeInTheDocument();
  });
});
