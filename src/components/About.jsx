import { Text } from '@chakra-ui/react';

const About = () => {
  return (
    <div className="about-container">
      <Text fontSize="3xl" fontWeight="bold" textAlign="center" py="4">
        Quiénes somos
      </Text>
      <Text fontSize="xl" textAlign="center">
        Somos un grupo de productores comprometidos con la calidad y el trabajo en comunidad. Nuestros productos son cultivados y elaborados de forma artesanal y con mucho amor. Queremos ofrecer a nuestros clientes los mejores productos frescos y saludables para que disfruten de una alimentación consciente y sostenible.
      </Text>
    </div>
  );
}

export default About;
