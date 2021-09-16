from flask_wtf import Form
from wtforms import StringField, SubmitField
from wtforms.validators import Required, DataRequired


class NameForm(Form):
    DataRequired = StringField('What is your name?', validators=[Required()])
    submit = SubmitField('Submit')
