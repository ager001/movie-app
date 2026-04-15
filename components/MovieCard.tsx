
import React from 'react';
import { Link } from 'expo-router';
import { TouchableOpacity, Image, Text } from 'react-native';

const MovieCard = ({id, poster_path, title, vote_average, release_date  }: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
        <TouchableOpacity className='w-[30%]'>
            <Image
            source={{
                uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : "https://via.placeholder.com/600x400/1a1a1a/ffffff.png"
            }}
            
            className='w-full h-52 rounded-lg'
            resizeMode='cover'
            />

            <Text className='text-sm font-bold text-white mt-2'>
                {title}
            </Text>

        </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;

// 1hr 37 minute 27 sec is where I left off, but I want to finish the rest of the app before going back to this.