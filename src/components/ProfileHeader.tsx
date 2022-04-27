import { useSelector } from 'react-redux';
import EditProfileSettings from './EditProfileSettings';
import FollowUserButton from './FollowUserButton';

//Рефактор type!
type TProfileHeader = {
  profile: {
    following: boolean;
    image: string;
    username: string;
    bio: string;
  };
  follow?: any;
  unfollow?: any;
}

function ProfileHeader({ profile, follow, unfollow }: TProfileHeader) {

  const { currentUser } = useSelector((state: any) => state.common);

  const isUser = currentUser &&
    profile.username === currentUser.username;

  return (
    <div className="user-info">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-10 offset-md-1">
            <img src={profile.image} className="user-img" alt={profile.username} />
            <h4>{profile.username}</h4>
            <p>{profile.bio}</p>
            <EditProfileSettings isUser={isUser} />
            <FollowUserButton
              isUser={isUser}
              user={profile}
              follow={follow}
              unfollow={unfollow}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileHeader
