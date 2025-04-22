import { useState, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { fetchArticles } from "../../articleSearch.js";
import ImageGallery from "../ImageGallery/ImageGallery.jsx";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn.jsx";
import ImageModal from "../ImageModal/ImageModal.jsx";
import Loading from "../Loading/Loading.jsx";

export default function App() {
  const [articles, setArticles] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(false);

  const [searchTerm, setSearchTerm] = useState("");

  const [page, setPage] = useState(1);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleSearch = (search) => {
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
