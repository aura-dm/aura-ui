import AToast from './';

export default { title: 'Toast Notification' };

function onDismiss(value) {
  alert(`Dismiss ${value}`);
}

export const Default = () => ({
  components: { AToast },
  methods: {
    onDismiss,
  },
  template: `
    <a-toast
      @dismiss="onDismiss('Info Toast')"
      id="info"
      text="This is a toast for showing general information."
      title="Info Toast"
    />
  `,
});

export const Success = () => ({
  components: { AToast },
  methods: {
    onDismiss,
  },
  template: `
    <a-toast
      @dismiss="onDismiss('Success Toast')"
      id="success"
      text="This is a toast for showing something has succeeded!"
      title="Success Toast"
      type="success"
    />
  `,
});

export const Error = () => ({
  components: { AToast },
  methods: {
    onDismiss,
  },
  template: `
    <a-toast
      @dismiss="onDismiss('Error Toast')"
      id="error"
      text="This is a toast for showing something has failed :("
      title="Error Toast"
      type="error"
    />
  `,
});
