package peppers.backendjokes.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import peppers.backendjokes.model.Joke;

public interface JokeRepository extends JpaRepository<Joke, Long> {
}
