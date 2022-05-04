import mobilecoin from '../src';
import { client } from '../src';

it('mobilecoin', () => {
  expect(mobilecoin).toMatchSnapshot();
});
it('client', () => {
  expect(client).toMatchSnapshot();
});
