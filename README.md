# about me
[live demo](https://kurkonrad.github.io/summary/)

[download my cv](https://kurkonrad.github.io/summary/assets/Konrad_Kur_CV.pdf)

```python
#!/usr/bin/python3
# enums.py
import datetime

about_kkur = {
    'full_name': 'Konrad Kur',
    'from': 'Stargard, Poland',
    'birth_date': datetime.date(1990, 4, 17),
    'skill_keywords': ['Python', 'Django', 'Flask', 'Linux', 'git', 'http',
                       'REST', 'PostgreSQL', 'MySQL', 'wsgi', 'JavaScript'],
    'phone_number': '+48 609 341 608',
    'email': 'konrad.kur@gmail.com',
    'github_account': 'https://github.com/kurkonrad/',
    'bitbucket_account': 'https://bitbucket.org/kurkonrad/',
    'availability': True
}
```

```python
#!/usr/bin/python3
# summary.py
import b2b
from enums import about_kkur

def request_contract(d):
    if d['availability'] is True:
        d = [(k, v) for k, v in d.items()]
        contract = b2b.new_contract(d)

        if contract['success'] is True:
            return b2b.final_contract(contract) # your company will gain

    return False


if __name__ == '__main__':
    response = request_contract(about_kkur)

    if response is True:
        print('Success, Konrad Kur is available for your company!')
```

# build project
```shell
$ npm install
$ gulp build
```
# start project
```shell
$ gulp runserver
```
