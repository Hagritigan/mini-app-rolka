import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar } from '@vkontakte/vkui';
import { useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import './App.css';


const rules = [
  {
    title: '1. Регистрация и анкета. Действия после принятия анкеты',
    link: 'registration'
  },
  {
    title: '2. Игра и игровые события',
    link: 'game-rule'
  },
  {
    title: '3. Баллы, оценка квестов, наградные листовки и их получение',
    link: 'revard-rule'
  },
  {
    title: '4. Личное Дело',
    link: 'ld-rule'
  },
  {
    title: '5. Способности и развитие',
    link: 'abilites-rule'
  },
  {
    title: '6. Возможности и ограничения',
    link: 'restriction-rule'
  },
  {
    title: '7. Пираты',
    link: 'pirates-rule'
  },
  {
    title: '8. Революционная армия',
    link: 'ra-rule'
  },
  {
    title: '9. Морской Дозор',
    link: 'marine-rule'
  },
  {
    title: '10. Сайфер Пол',
    link: 'cp-rule'
  },
  {
    title: '11. Снаряжение',
    link: 'invetory-rule'
  },
  {
    title: '12. Расы',
    link: 'race-rule'
  },
  {
    title: '13. Система восстановления',
    link: 'rebild-rule'
  },
  {
    title: '14. Интеграция канонов в ролевую',
    link: 'canon-rule'
  },
];

export const Home = ({ id }) => {
  const routeNavigator = useRouteNavigator();

  const listRules = rules.map((rule) => 
    <Button className='button' stretched size="l" mode="secondary" onClick={() => routeNavigator.push(rule.link)} key={rule.link}>
      { rule.title }
    </Button>
  );

  return (

    <Panel id={id}>
      <PanelHeader>Главная</PanelHeader>
      <Group class='main_wrrapper' header={<Header mode="secondary">Список разделов</Header>}>
        <Div class="some">
          {listRules}
        </Div>
        <Div>
          <a href="https://developer.mozilla.org">MDN</a>
        </Div>
      </Group>
    </Panel>
  );
};

