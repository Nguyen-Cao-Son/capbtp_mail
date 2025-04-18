using { MAIL_PROJECT.db as Service } from '../db/mail' ; 

service MailService { 
  @readonly : true 
  entity MailHeader as projection on Service.mailHeader  ; 


}