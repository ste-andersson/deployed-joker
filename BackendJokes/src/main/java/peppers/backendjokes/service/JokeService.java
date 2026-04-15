package peppers.backendjokes.service;

import org.springframework.stereotype.Service;
import peppers.backendjokes.dto.JokeDTO;
import peppers.backendjokes.model.Joke;
import peppers.backendjokes.repository.JokeRepository;

import java.util.ArrayList;
import java.util.List;

@Service
public class JokeService {

    private final JokeRepository jokeRepository;

    public JokeService(JokeRepository jokeRepository) {
        this.jokeRepository = jokeRepository;
    }

    public List<JokeDTO> getAllJokes() {
        List<Joke> jokes = jokeRepository.findAll();
        return jokes.stream()
                .map((joke) ->
                        new JokeDTO(
                                joke.getJoke(),
                                joke.getUser().getUserName()))
                .toList();
    }
}
