import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import abbreviate from 'number-abbreviate';
import TableSortLabel from '@material-ui/core/TableSortLabel';

// import ResultsTable from './ResultsTable';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  tableBody: {
    fontSize: 18,
  },
  root: {
    width: '100%',
  },
  paper: {
    width: '100%',
    // marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
});

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  { id: 'sno', numeric: false, disablePadding: true, label: '#' },
  {
    id: 'videoTitle',
    numeric: false,
    disablePadding: true,
    label: 'Video Thumbnail',
  },
  {
    id: 'videoThumbnail',
    numeric: false,
    disablePadding: true,
    label: 'Video Title',
  },
  { id: 'views', numeric: true, disablePadding: false, label: 'Views' },
  { id: 'likes', numeric: true, disablePadding: false, label: 'Likes' },
];

function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            className={classes.tableBody}
            key={headCell.id}
            align={headCell.numeric ? 'right' : 'left'}
            padding={headCell.disablePadding ? 'none' : 'default'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const Results = ({ videoList }) => {
  const classes = useStyles();
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('likes');

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  return (
    <div className='results-container'>
      <div className={classes.root}>
        <Paper className={classes.paper}>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label='enchanced table'>
              <EnhancedTableHead
                classes={classes}
                order={order}
                orderBy={orderBy}
                onRequestSort={handleRequestSort}
                // rowCount={rows.length}
              />
              <TableBody>
                {stableSort(videoList, getComparator(order, orderBy)).map(
                  (video, index) => {
                    return (
                      <TableRow hover key={video.id}>
                        <TableCell
                          className={classes.tableBody}
                          component='th'
                          scope='row'
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell className={classes.tableBody} align='left'>
                          <a href={`https://youtube.com/watch?v=${video.id}`}>
                            <img src={video.snippet.thumbnails.default.url} />
                          </a>
                        </TableCell>
                        <TableCell className={classes.tableBody} align='left'>
                          <a href={`https://youtube.com/watch?v=${video.id}`}>
                            {video.snippet.title}
                          </a>
                        </TableCell>
                        <TableCell className={classes.tableBody} align='right'>
                          {abbreviate(video.statistics.viewCount, 1)}
                        </TableCell>
                        <TableCell className={classes.tableBody} align='right'>
                          {abbreviate(video.statistics.likeCount, 1)}
                        </TableCell>
                      </TableRow>
                    );
                  }
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </div>
    </div>
  );
};

export default Results;
{
  /* <div className='results-container'>
      <table className='table table-borderless'>
        <thead className='thead-dark'>
          <tr>
            <th scope='col'>#</th>
            <th scope='col'>Video Thumbnail</th>
            <th scope='col'>Video Title</th>
            <th scope='col'>Views</th>
            <th scope='col'>Likes</th>
          </tr>
        </thead>
        <tbody>
          {videoList.map((video, index) => (
            <ResultsTable
              key={video.id}
              url={`https://www.youtube.com/watch?v=${video.id}`}
              serialNo={index + 1}
              title={video.snippet.title}
              thumbnail={video.snippet.thumbnails.default.url}
              views={abbreviate(video.statistics.viewCount, 1)}
              likes={abbreviate(video.statistics.likeCount, 1)}
            />
          ))}
        </tbody>
      </table>
    </div> */
}
