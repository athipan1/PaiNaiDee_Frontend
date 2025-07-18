import { http, HttpResponse } from 'msw';

export const handlers = [
  // Mock for POST /reviews
  http.post('http://localhost:5000/reviews', async ({ request }) => {
    const newReview = await request.json();
    console.log('Mock API received:', newReview);

    // Simulate a random failure
    if (Math.random() < 0.2) {
      return HttpResponse.json({ message: 'Failed to submit review' }, { status: 500 });
    }

    return HttpResponse.json(
      {
        ...(newReview as object),
        id: new Date().getTime(),
      },
      { status: 201 }
    );
  }),
];
