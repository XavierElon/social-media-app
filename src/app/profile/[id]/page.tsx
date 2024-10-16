import { useParams } from 'next/navigation';

const ProfilePage = () => {
  const { id } = useParams();
  return <div className="">Page</div>;
};

export default ProfilePage;
