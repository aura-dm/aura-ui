import ALoading from './';

export default { title: 'Loading' };

export const loading = () => ({
  components: { ALoading },
  template: `
    <div style="background-color: #eeeeee; height: 400px; position: relative; width: 600px;">
      <a-loading />
    </div>
  `,
});
