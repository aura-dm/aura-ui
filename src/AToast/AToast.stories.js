import AToast from './';

export default { title: 'Toast Notification' };

export const InfoToast = () => ({
  components: { AToast },
  template: `
    <a-toast
      id="info"
      text="This is a toast for showing general information."
      title="Info Toast"
    />
  `,
});

export const SuccessToast = () => ({
  components: { AToast },
  template: `
    <a-toast
      id="success"
      text="This is a toast for showing something has succeeded!"
      title="Success Toast"
      type="success"
    />
  `,
});

export const ErrorToast = () => ({
  components: { AToast },
  template: `
    <a-toast
      id="error"
      text="This is a toast for showing something has failed :("
      title="Error Toast"
      type="error"
    />
  `,
});
