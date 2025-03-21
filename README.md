### Hexlet tests and linter status:
[![Actions Status](https://github.com/Arakelli/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Arakelli/frontend-project-46/actions)
[![Node CI](https://github.com/Arakelli/frontend-project-46/actions/workflows/check-project.yml/badge.svg)](https://github.com/Arakelli/frontend-project-46/actions/workflows/check-project.yml)
<a href="https://codeclimate.com/github/Arakelli/frontend-project-46/maintainability"><img src="https://api.codeclimate.com/v1/badges/accda0538516ba8f4d9d/maintainability" /></a>
<a href="https://codeclimate.com/github/Arakelli/frontend-project-46/test_coverage"><img src="https://api.codeclimate.com/v1/badges/accda0538516ba8f4d9d/test_coverage" /></a>

# Проект "Вычислитель отличий"

Программа, определяющую разницу между двумя структурами данных.

## Установка

```
make install
```

### Примеры использования 
#### Сравнение плоских файлов JSON
Пример ввода команды:
```
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/YB0pUGAhECURqERWaxabKa3Jy.svg)](https://asciinema.org/a/YB0pUGAhECURqERWaxabKa3Jy)

#### Сравнение плоских файлов YAML
Пример ввода команды:
```
gendiff __fixtures__/file1.yaml __fixtures__/file2.yaml
```

[![asciicast](https://asciinema.org/a/noexknMCTx2xregVVkUhksQ8y.svg)](https://asciinema.org/a/noexknMCTx2xregVVkUhksQ8y)

#### Рекурсивное сравнение в формате stylish
Пример ввода команды:
```
gendiff __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/Y4t4LsamzxfLwLLXULTF0ymjt.svg)](https://asciinema.org/a/Y4t4LsamzxfLwLLXULTF0ymjt)

#### Вывод в плоском формате
Пример ввода команды:
```
gendiff --format plain __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/gCmatx2RleRsg8XVTSdKCCdpz.svg)](https://asciinema.org/a/gCmatx2RleRsg8XVTSdKCCdpz)

#### Вывод в формате JSON
Пример ввода команды:
Пример ввода команды:
```
gendiff --format json __fixtures__/file1.json __fixtures__/file2.json
```

[![asciicast](https://asciinema.org/a/5mmHvJmiGjn0NDYs9AHnewJhQ.svg)](https://asciinema.org/a/5mmHvJmiGjn0NDYs9AHnewJhQ)