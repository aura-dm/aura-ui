import AGrid from './';

export default { title: 'Grid' };

const content = `
  <div style="background-color: rgba(167,42,140,1);">Item 1</div>
  <div style="background-color: rgba(167,42,140,1);">Item 2</div>
  <div style="background-color: rgba(167,42,140,1);">Item 3</div>
  <div style="background-color: rgba(167,42,140,1);">Item 4</div>
  <div style="background-color: rgba(167,42,140,1);">Item 5</div>
  <div style="background-color: rgba(167,42,140,1);">Item 6</div>
  <div style="background-color: rgba(167,42,140,1);">Item 7</div>
`;

const style = {
  backgroundColor: 'rgba(167,42,140,0.1)',
  height: '400px',
  position: 'relative',
  width: '100%',
};

export const Default = () => ({
  components: { AGrid },
  data() {
    return {
      style,
    };
  },
  template: `
    <a-grid :style="style">
      ${content}
    </a-grid>
  `,
});

export const CustomColumns = () => ({
  components: { AGrid },
  data() {
    return {
      columns: {
        xs: '1fr 1fr',
        sm: '1fr 1fr 1fr',
        md: '1fr 1fr',
        lg: '1fr 1fr 1fr',
        xl: '1fr 1fr 1fr 1fr 1fr',
      },
      style,
    };
  },
  template: `
    <a-grid :columns="columns" :style="style">
      ${content}
    </a-grid>
  `,
});

export const CustomGap = () => ({
  components: { AGrid },
  data() {
    return {
      gap: {
        xs: '10px',
        sm: '20px',
        md: '30px',
        lg: '40px',
        xl: '50px',
      },
      style,
    };
  },
  template: `
    <a-grid :gap="gap" :style="style">
      ${content}
    </a-grid>
  `,
});

export const Loading = () => ({
  components: { AGrid },
  template: `
    <a-grid style="background-color: #eeeeee; height: 400px; position: relative; width: 600px" />
  `,
});
