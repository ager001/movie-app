import { images } from "@/constants/images";
import { ActivityIndicator, Image, View, Text, FlatList } from "react-native";
import { icons } from "@/constants/icons";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import MovieCard from "@/components/MovieCard";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() => fetchMovies({ query: "" }));

  // Components to show above the list
  const Header = () => (
    <View className="px-5">
      <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      <SearchBar
        onPress={() => router.push("/search")}
        placeholder="Search for movies, TV shows, and more"
      />
      <Text className="text-lg text-white font-bold mt-5 mb-2">
        Latest Movies
      </Text>
    </View>
  );

  if (moviesLoading) {
    return (
      <View className="flex-1 bg-primary justify-center items-center">
        <Image source={images.bg} className="absolute w-full z-0" />
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (moviesError) {
    return (
      <View className="flex-1 bg-primary justify-center items-center px-5">
        <Image source={images.bg} className="absolute w-full z-0" />
        <Text className="text-white text-center">
          Error: {moviesError?.message}
        </Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-primary">
      {/* Background Image stays fixed */}
      <Image source={images.bg} className="absolute w-full z-0" />

      <FlatList
        data={movies}
        renderItem={({ item }) => (
          <MovieCard
          {...item}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingHorizontal: 20, // Aligning with the header padding
          marginBottom: 10,
        }}
        // THIS IS THE KEY: Everything above the list goes here
        ListHeaderComponent={Header}
        contentContainerStyle={{
          flexGrow: 1,
          // This value must be HIGHER than your TabBar height (64) + marginBottom (30)
          paddingBottom: 120,
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}


// I hr 46 minutes