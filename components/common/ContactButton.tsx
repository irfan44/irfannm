import ExternalLink from 'lib/ui/ExternalLink';

const ContactButton = () => {
  return (
      <ExternalLink
        type="button"
        title="Contact me!"
        href="mailto:irfannmuhajir@gmail.com"
      >
        <span className="text-xl">📧</span>
        <span>Contact me!</span>
      </ExternalLink>
  );
};

export default ContactButton;
