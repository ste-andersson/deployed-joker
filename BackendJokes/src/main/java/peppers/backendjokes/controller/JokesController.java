package peppers.backendjokes.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import peppers.backendjokes.dto.JokeDTO;
import peppers.backendjokes.service.JokeService;

import java.util.List;

@RestController
@RequestMapping("/api/jokes")
public class JokesController {
    private final JokeService jokeService;

    public JokesController(JokeService jokeService) {
        this.jokeService = jokeService;
    }

    @PostMapping
    public ResponseEntity<String> addJoke(@RequestBody String joke) {
        return ResponseEntity.ok(joke);
    }

    @GetMapping(path= {"", "/"})
    public ResponseEntity<List<JokeDTO>> getAllJokes() {
        List<JokeDTO> jokes = jokeService.getAllJokes();

        return ResponseEntity.ok(jokes);
    }

}
