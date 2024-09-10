import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const ip = req.headers['x-real-ip'] as string || req.socket.remoteAddress;

  return {
    props: {
      ip,
    },
  };
}
