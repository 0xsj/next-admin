import { Box, Text, Container } from "../atoms";
import { MAIL } from "../fixtures/mail";

type Props = {};

export const Mail: React.FC<Props> = (props) => {
  const data = MAIL;

  return (
    <Container flex={20}>
      <Box>
        <Box>
          <Text fontWeight={"bold"} fontSize={12}>
            Ipsa iure voluptate occaecati eos aperiam tempore earum labore
          </Text>
        </Box>
        <Box>
          <Text fontSize={10}>Herta.Hermiston@yahoo.com</Text>
          <Text fontSize={10}>Toby_Jakubowski@hotmail.com</Text>
        </Box>
        <Box p={"sm"} backgroundColor={"$headerBarBackground"}>
          <Box p={"lg"} flexGrow={1}>
            <Text fontSize={11}>
              "Nobis itaque voluptate voluptatum ab dolorum ullam. Voluptatum labore libero
              praesentium asperiores cum laudantium delectus illo soluta. Ea sequi fuga. Illum
              ratione inventore numquam incidunt necessitatibus. Porro accusantium aliquam tempore
              molestiae eius harum similique possimus. Praesentium autem vel consequuntur. Iusto
              nisi voluptatem aperiam odio hic ut cum dolorem. Explicabo quaerat delectus saepe.
              Deleniti similique modi voluptatem odit quae. Vero odit aliquid dicta voluptatem.
              Laboriosam repudiandae fugiat ea provident assumenda non dolore rem. Ut a ipsam ex
              illo eveniet quidem tempore praesentium. Labore illum doloremque harum ab alias
              repudiandae neque deleniti. Corporis voluptatibus ullam est odio facilis magnam
              maiores esse. Expedita error vel accusantium aliquam aliquid laudantium impedit ex."
            </Text>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};
