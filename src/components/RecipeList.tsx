import GlobalSearchBar from "./BlobalSearchBar";
import HorizontalFilterBar from "./FilterRecipes";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  return (
    <div>
      <GlobalSearchBar />
      <HorizontalFilterBar />

      <div className="max-w-7xl container mx-auto mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Delicious Pasta"
          calories={450}
          time="30 min"
          userName="John Doe"
          userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Healthy Salad"
          calories={300}
          time="15 min"
          userName="Jane Smith"
          userAvatar="https://randomuser.me/api/portraits/women/32.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Delicious Pasta"
          calories={450}
          time="30 min"
          userName="John Doe"
          userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Healthy Salad"
          calories={300}
          time="15 min"
          userName="Jane Smith"
          userAvatar="https://randomuser.me/api/portraits/women/32.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Delicious Pasta"
          calories={450}
          time="30 min"
          userName="John Doe"
          userAvatar="https://randomuser.me/api/portraits/men/32.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Healthy Salad"
          calories={300}
          time="15 min"
          userName="Jane Smith"
          userAvatar="https://randomuser.me/api/portraits/women/32.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
        <RecipeCard
          image="https://via.placeholder.com/400x300"
          title="Homemade Pizza"
          calories={600}
          time="45 min"
          userName="Alice Johnson"
          userAvatar="https://randomuser.me/api/portraits/women/33.jpg"
        />
      </div>
    </div>
  );
};

export default RecipeList;
