import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import PropTypes from 'prop-types';


const rules = [
  '1. Регистрация и анкета. Действия после принятия анкеты',
  '2. Игра и игровые события',
  '3. Баллы, оценка квестов, наградные листовки и их получение',
  '4. Личное Дело',
  '5. Способности и развитие',
  '6. Возможности и ограничения',
  '7. Пираты',
  '8. Революционная армия',
  '9. Морской Дозор',
  '10. Сайфер Пол',
  '11. Снаряжение',
  '12. Расы',
  '13. Система восстановления',
  '14. Интеграция канонов в ролевую',
];

export const Home = ({ id, fetchedUser }) => {
  const { photo_200, city, first_name, last_name } = { ...fetchedUser };
  const routeNavigator = useRouteNavigator();

  const listRules = rules.map((rule) => <div>{ rule }</div>);

  return (
    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      {fetchedUser && (
        <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
          <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
            {`${first_name} ${last_name}`}
          </Cell>
        </Group>
      )}
      <Group header={<Header mode="secondary">User Data Fetched with VK Bridge</Header>}>
        <Cell before={photo_200 && <Avatar src={photo_200} />} subtitle={city?.title}>
          {`${first_name} ${last_name}`}
        </Cell>
      </Group>

      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          <Button stretched size="l" mode="secondary" onClick={() => routeNavigator.push('persik')}>
            Покажите Персика, пожалуйста!
          </Button>
        </Div>
      </Group>

      <Group header={<Header mode="secondary">Navigation Example</Header>}>
        <Div>
          {listRules}
        </Div>
      </Group>
    </Panel>
  );
};

Home.propTypes = {
  id: PropTypes.string.isRequired,
  fetchedUser: PropTypes.shape({
    photo_200: PropTypes.string,
    first_name: PropTypes.string,
    last_name: PropTypes.string,
    city: PropTypes.shape({
      title: PropTypes.string,
    }),
  }),
};
