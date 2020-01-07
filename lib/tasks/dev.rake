namespace :dev do
  desc "TODO"
  task register: :environment do
    puts "#{%x(curl --header "Content-Type: application/json" --request POST --data '{"user": {"email": "admin@admin.com", "password": "123123"}}' \
    http://localhost:3000/registrations
    )}"
  end

  task login: :environment do
    puts "#{%x(curl --header "Content-Type: application/json" --request POST --data '{"user": {"email": "admin@admin.com", "password": "123123"}}' \
    http://localhost:3000/sessions
    )}"
  end

end
