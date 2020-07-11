import AActionBar from '../AActionBar';
import AText from './';

export default { title: 'Text' };

export const text = () => ({
  components: { AText },
  template: `
    <div style="display: flex; flex-direction: column;">
      <a-text component="h1" variant="h1">Heading 1</a-text>
      <a-text component="h2" variant="h2">Heading 2</a-text>
      <a-text component="h3" variant="h3">Heading 3</a-text>
      <a-text component="h4" variant="h4">Heading 4</a-text>
      <a-text component="h5" variant="h5">Heading 5</a-text>
      <a-text component="h6" variant="h6">Heading 6</a-text>
      <a-text component="p" variant="p">Paragraph</a-text>
    </div>
  `,
});
