import React, { useState, useEffect } from 'react';
import { getAlbumList } from '../../api/api';
import Loader from '../loader/Loader';
import GenericPage from '../layout/GenericPage';
import GenericPageHeader from '../layout/GenericPageHeader';
import ScrollingMenu from '../scrollingmenu/ScrollingMenu';

const Dashboard = () => {
  /* We use regular state and fetching via axios for the dashboard component as
   the horizontal scrolling menu component breaks due to react-query's autofetching.
   When autofetching occurs, the visibility context of the component fails to update
   which prevents the left/right scrolling buttons from functioning properly. */
  const [recentAlbums, setRecentAlbums]: any[] = useState(null);
  const [newestAlbums, setNewestAlbums]: any[] = useState(null);
  const [randomAlbums, setRandomAlbums]: any[] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError]: any = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const newest = await getAlbumList({ type: 'newest', size: 50 });
        const recent = await getAlbumList({ type: 'recent', size: 50 });
        const random = await getAlbumList({ type: 'random', size: 50 });

        setNewestAlbums(newest);
        setRecentAlbums(recent);
        setRandomAlbums(random);
      } catch (err) {
        if (err instanceof Error) {
          setIsError(err.message);
        } else {
          setIsError('An unknown error occurred while fetching the data.');
        }
      }

      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <span>Error: {isError}</span>;
  }

  return (
    <GenericPage header={<GenericPageHeader title="Dashboard" />}>
      {newestAlbums && recentAlbums && randomAlbums && (
        <>
          <ScrollingMenu
            title="Recently Added"
            data={newestAlbums.album}
            routePrefix="album"
          />

          <ScrollingMenu
            title="Recently Played"
            data={recentAlbums.album}
            routePrefix="album"
          />
          <ScrollingMenu
            title="Random"
            data={randomAlbums.album}
            routePrefix="album"
          />
        </>
      )}
    </GenericPage>
  );
};

export default Dashboard;