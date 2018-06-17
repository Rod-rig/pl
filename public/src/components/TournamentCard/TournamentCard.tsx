import {Button, Card, CardActions, CardContent, CardMedia, Typography, withStyles} from '@material-ui/core';
import * as React from 'react';
import {Link} from 'react-router-dom';
import {dict} from '../../dict';

interface IProps {
  classes?: any;
  country?: string;
  id: string;
  img?: string;
  name: string;
}

const styles = {
  img: {
    backgroundSize: 'contain',
    height: '300px',
  },
};

const TournamentCardElement = (props: IProps) => {
  const {classes} = props;
  const MyLink = (linkProps: any) => <Link to={`tournament/${props.id}`} {...linkProps}/>;
  const renderImage = () => {
    return props.img ? (
      <CardMedia
        className={classes.img}
        image={props.img}
        title={props.name}
      />
    ) : undefined;
  };

  return (
    <Card>
      {renderImage()}
      <CardContent>
        <Typography variant='headline' component='h2'>{props.name}</Typography>
        <Typography variant='caption'>{props.country}</Typography>
      </CardContent>
      <CardActions>
        <Button component={MyLink} size='small' color='primary'>{dict.tournamentCardMore}</Button>
      </CardActions>
    </Card>
  );
};

export const TournamentCard = withStyles(styles)(TournamentCardElement);
