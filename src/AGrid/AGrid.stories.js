import AGrid from './';

export default { title: 'Grid' };

export const Grid = () => ({
  components: { AGrid },
  template: `
    <a-grid style="background-color: #eeeeee; height: 400px; position: relative; width: 100%">
      <div style="background-color: #dddddd;">Item 1</div>
      <div style="background-color: #dddddd;">Item 2</div>
      <div style="background-color: #dddddd;">Item 3</div>
      <div style="background-color: #dddddd;">Item 4</div>
      <div style="background-color: #dddddd;">Item 5</div>
      <div style="background-color: #dddddd;">Item 6</div>
      <div style="background-color: #dddddd;">Item 7</div>
    </a-grid>
  `,
});

export const GridLoading = () => ({
  components: { AGrid },
  template: `
    <a-grid style="background-color: #eeeeee; height: 400px; position: relative; width: 600px" />
  `,
});
