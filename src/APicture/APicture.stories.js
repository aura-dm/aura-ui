import APicture from './';

export default { title: 'Picture' };

export const picture = () => ({
  components: { APicture },
  template: `
    <a-picture
      height="300px"
      src="https://cdn.dribbble.com/users/1536976/screenshots/9395436/media/26cdea2efc0adf570c2e94a9f8646fdd.png"
      width="450px"
    />
  `,
});
