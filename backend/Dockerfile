# Pull base image
FROM python:latest

# Set environment variables
ENV PIP_DISABLE_PIP_VERSION_CHECK 1
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV SECRET_KEY=django-insecure--$^@(#(v#do1&0m-xu=tm38$@bw$!27wffrj_mzpgx%if+2658
ENV PGUSER=mgumlapc
ENV PGDATABASE=mgumlapc
ENV PGPASSWORD=JZX815gchsitQm_fYzoM_5bYZQOIfX7L
ENV PGHOST=stampy.db.elephantsql.com
ENV PGPORT=5432

# Set work directory
WORKDIR /code

# Install dependencies
COPY ./requirements.txt .
RUN pip install -r requirements.txt


# Copy project
COPY . .


RUN python manage.py migrate
RUN python manage.py showmigrations

EXPOSE 8000

CMD ["gunicorn","--bind", ":8000", "core.wsgi:application"]