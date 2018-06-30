import {createStyles, List, Paper, Theme, WithStyles, withStyles} from '@material-ui/core';
import {observer} from 'mobx-react';
import * as React from 'react';
import {Loader, MatchItem} from '../';
import {IMatch, IMatchList} from '../../@types';

const styles = ({breakpoints, spacing, typography}: Theme) => createStyles({
  round: {
    marginBottom: spacing.unit,
    [breakpoints.up('lg')]: {
      margin: `0 ${spacing.unit * 3}px ${spacing.unit * 3}px`,
    },
  },
  title: {
    ...typography.body2,
    padding: `${spacing.unit}px`,
    [breakpoints.up('lg')]: {
      padding: `${spacing.unit}px ${spacing.unit * 4}px`,
    },
  },
});

interface IProps extends WithStyles<typeof styles> {
  store: IMatchList;
}

export const MatchList = withStyles(styles)(observer(class extends React.Component<IProps, {}> {
  public render() {
    const {classes, store} = this.props;
    let group: JSX.Element[] = [];

    return store.isLoaded ? (
      <List disablePadding={true}>
        {
          store.list.map((item: IMatch, index: number, list: any) => {
            const stat = {
              awayScore: item.sport_event_status.away_score,
              awayTeam: item.sport_event.competitors[1].name,
              homeScore: item.sport_event_status.home_score,
              homeTeam: item.sport_event.competitors[0].name,
              round: item.sport_event.tournament_round.number,
            };
            if (list[index + 1] && stat.round === list[index + 1].sport_event.tournament_round.number) {
              group.push(<MatchItem key={`${stat.homeTeam}-${stat.awayTeam}-${index}`} {...stat}/>);
            } else if (list[index + 1] || index === list.length - 1) {
              group.push(<MatchItem key={`${stat.homeTeam}-${stat.awayTeam}-${index}`} {...stat}/>);
              const round = (
                <React.Fragment key={`${stat.homeTeam}-${stat.awayTeam}-${index}`}>
                  <div className={classes.title}>Round {stat.round}</div>
                  <Paper className={classes.round}>{group}</Paper>
                </React.Fragment>
              );
              group = [];
              return round;
            } else {
              return <MatchItem key={`${stat.homeTeam}-${stat.awayTeam}-${index}`} {...stat}/>;
            }
          })
        }
      </List>
    ) : (
      <Loader/>
    );
  }
}));
