/* tslint:disable: object-literal-key-quotes object-literal-sort-keys*/
export const tableMock = {
  'generated_at': '2018-06-16T15:47:17+00:00',
  'schema': 'http://schemas.sportradar.com/bsa/soccer/v1/json/endpoints/soccer/tournament_standings.json',
  'tournament': {
    'id': 'sr:tournament:17',
    'name': 'Premier League',
    'sport': {
      'id': 'sr:sport:1',
      'name': 'Soccer',
    },
    'category': {
      'id': 'sr:category:1',
      'name': 'England',
      'country_code': 'ENG',
    },
    'current_season': {
      'id': 'sr:season:54571',
      'name': 'Premier League 18/19',
      'start_date': '2018-08-11',
      'end_date': '2019-05-13',
      'year': '18/19',
    },
  },
  'season': {
    'id': 'sr:season:54571',
    'name': 'Premier League 18/19',
    'start_date': '2018-08-11',
    'end_date': '2019-05-13',
    'year': '18/19',
    'tournament_id': 'sr:tournament:17',
  },
  'standings': [
    {
      'tie_break_rule': 'In the event that two (or more) teams have an equal number of points, ' +
      'the following rules break the tie:\r\n1. Goal difference\r\n2. Goals scored',
      'type': 'total',
      'groups': [
        {
          'team_standings': [
            {
              'team': {
                'id': 'sr:competitor:42',
                'name': 'Arsenal',
              },
              'rank': 1,
              'current_outcome': 'Champions League',
              'played': 38,
              'win': 30,
              'draw': 5,
              'loss': 3,
              'goals_for': 95,
              'goals_against': 32,
              'goal_diff': 63,
              'points': 95,
            },
            {
              'team': {
                'id': 'sr:competitor:60',
                'name': 'AFC Bournemouth',
              },
              'rank': 2,
              'current_outcome': 'Champions League',
              'played': 20,
              'win': 10,
              'draw': 0,
              'loss': 10,
              'goals_for': 30,
              'goals_against': 0,
              'goal_diff': 0,
              'points': 30,
            },
            {
              'team': {
                'id': 'sr:competitor:30',
                'name': 'Brighton & Hove Albion FC',
              },
              'rank': 3,
              'current_outcome': 'Champions League',
              'played': 0,
              'win': 0,
              'draw': 0,
              'loss': 0,
              'goals_for': 0,
              'goals_against': 0,
              'goal_diff': 0,
              'points': 0,
            },
          ],
        },
      ],
    },
  ],
};
