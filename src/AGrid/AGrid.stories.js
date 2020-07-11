import AGrid from './';

export default { title: 'Grid' };

export const Grid = () => ({
  components: { AGrid },
  template: `
    <a-grid style="height: 400px; position: relative; width: 600px">
      <div>Item 1</div>
      <div>Item 2</div>
      <div>Item 3</div>
      <div>Item 4</div>
      <div>Item 5</div>
      <div>Item 6</div>
      <div>Item 7</div>
    </a-grid>
  `,
});

export const GridLoading = () => ({
  components: { AGrid },
  template: `
    <a-grid style="height: 400px; position: relative; width: 600px" />
  `,
});
