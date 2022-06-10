// A mock function to mimic making an async request for data
export default function fetchCount(amount = 1) {
  return new Promise
      // eslint-disable-next-line no-promise-executor-return
      <{ data: number }>((resolve) => setTimeout<any>(() => resolve({ data: amount }), 500));
}
