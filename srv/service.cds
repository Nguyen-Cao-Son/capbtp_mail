using { MAIL_PROJECT.db as Service } from '../db/mail' ; 
using { API_SALES_ORDER_SRV as SALES_ORDER_SRV } from './external/API_SALES_ORDER_SRV' ; 
service MailService { 
  @readonly : true 
  entity MailHeader as projection on Service.mailHeader  ; 
  entity SaleOrderHeader as projection on SALES_ORDER_SRV.A_SalesOrder ; 

}