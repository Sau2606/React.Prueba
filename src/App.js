const user = {
  name: 'Saùl Flores',
  imageUrl: 'https://elcomercio.pe/resizer/8lRiRKQD83X-lVYsvhaWsnTHoMg=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/GI4DANJNGA3C2MRUKQYDAORSHA.jpg',
  imageSize: 300,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Photo of ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}



