import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar";
import { fetchArticles } from "../../articleSearch";
import ImageGallery from "../ImageGallery/ImageGallery";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";
import Loading from "../Loading/Loading";
import { Article } from "./App.types";

export default function App() {
  const [articles, setArticles] = useState<Article[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [error, setError] = useState<boolean>(false);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [page, setPage] = useState<number>(1);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  console.log("selectedImage", selectedImage);

  const handleSearch = (search: string) => {
    setSearchTerm(`${search}/${Date.now()}`);
    setPage(1);
    setArticles([]);
  };

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setIsLoading(true);
        const data = await fetchArticles(searchTerm.split("/")[0], page);
        if (data.length === 0) {
          toast.error("No results found.");
        } else {
          setArticles((prevArticles) => {
            return [...prevArticles, ...data];
          });
        }

        console.log(data);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, [searchTerm, page]);

  return (
    <section>
      <SearchBar onSearch={handleSearch} />

      <Toaster position="top-right" />

      {error && <b>Whops there was an error please reload...</b>}

      {articles.length !== 0 && (
        <ImageGallery items={articles} onImageClick={setSelectedImage} />
      )}

      {articles.length > 0 && !isLoading && (
        <div>
          <LoadMoreBtn setPage={setPage} isLoading={isLoading} />
        </div>
      )}

      {isLoading && <Loading />}

      {selectedImage && (
        <ImageModal
          imageUrl={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </section>
  );
}
