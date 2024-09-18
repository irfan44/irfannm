import SocialMedia from 'components/common/SocialMedia'

const SocialContact = () => {
  return (
    <div>
      <h2 className="mb-6">Contact</h2>
      <p className="mb-2">
        Here are several of my socials for you to look at. Feel free to follow
        and check out for things i do :
      </p>
      <SocialMedia type="list" />
    </div>
  )
}

export default SocialContact
