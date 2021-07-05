import ATypography from './';

export default { title: 'Typography' };

export const Default = () => ({
  components: { ATypography },
  template: `
    <div style="display: flex; flex-direction: column;">
      <a-typography component="h1" variant="h1">Heading 1</a-typography>
      <a-typography component="h2" variant="h2">Heading 2</a-typography>
      <a-typography component="h3" variant="h3">Heading 3</a-typography>
      <a-typography component="h4" variant="h4">Heading 4</a-typography>
      <a-typography component="h5" variant="h5">Heading 5</a-typography>
      <a-typography component="h6" variant="h6">Heading 6</a-typography>
      <a-typography component="p" variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mattis ultrices nunc, et condimentum diam. Phasellus mollis eros lacus. Aliquam congue eu mi quis consequat. Proin ut nunc mi. Sed pharetra vestibulum turpis, at porta lectus aliquet in.
      </a-typography>
    </div>
  `,
});
