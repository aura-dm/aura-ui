import AImageCard from '../AImageCard';
import AGrid from './';

export default { title: 'Grid' };

const content = `
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 1</div>
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 2</div>
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 3</div>
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 4</div>
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 5</div>
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 6</div>
  <div style="background-color: rgba(167,42,140,1); height: 40px;">Item 7</div>
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

export const ImageCards = () => ({
  components: { AGrid, AImageCard },
  template: `
    <a-grid>
      <a-image-card
        image-url="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
        imageHeight="160px"
        title="Example Image Card 1"
      />
      <a-image-card
        image-url="https://cdn.dribbble.com/users/124454/screenshots/15688254/media/b36fb2e24524c7d91bc1f9fb3961b7c4.png?compress=1&resize=1600x1200"
        imageHeight="160px"
        title="Example Image Card 2"
      />
      <a-image-card
        image-url="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
        imageHeight="160px"
        title="Example Image Card 3"
      />
      <a-image-card
        image-url="https://cdn.dribbble.com/users/774375/screenshots/15976853/media/16f58b00df08425e804f29d84d7d8b59.png?compress=1&resize=1600x1200"
        imageHeight="160px"
        title="Example Image Card 4"
      />
      <a-image-card
        image-url="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
        imageHeight="160px"
        title="Example Image Card 5"
      />
    </a-grid>
  `,
});

export const Loading = () => ({
  components: { AGrid },
  template: `
    <a-grid style="background-color: #eeeeee; height: 400px; position: relative; width: 600px" />
  `,
});
