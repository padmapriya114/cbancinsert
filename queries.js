const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "cbanc.cny7tsngrm4b.us-east-2.rds.amazonaws.com",
  database: "postgres",
  password: "cbanc2021",
  port: 5432
});



const insertfi = (request, response) => {
const {id, accountid, accountnumber, wireroutingnumber, achroutingnumber, dwollafundingid, name, routingnumber, authtextid} = request.body
  pool.query( "INSERT INTO fi (id, accountid, accountnumber, wireroutingnumber, achroutingnumber, dwollafundingid, name, routingnumber, authtextid) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",[id, accountid, accountnumber, wireroutingnumber, achroutingnumber, dwollafundingid, name, routingnumber, authtextid], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in fi')
  })
}

const insertopportunity = (request, response) => {
const {id,created,modified,lead_userId,lead_fi_Id,lead_name,currentBalanceInPennies,dueBy,retaining,loanType,tags,location_city,location_state,location_street,rate,term,description,amortization,grading,leadFee_serviceFee,leadfee_flatFeeInPennies,status,percentFunded,percentCommitted,contractId,resourceType} = request.body
 pool.query( "INSERT INTO opportunity (id, created, modified,lead_userId,lead_fi_Id,lead_name,currentBalanceInPennies,dueBy,retaining,loanType,tags,location_city,location_state,location_street,rate,term,description,amortization,grading,leadFee_serviceFee,leadfee_flatFeeInPennies,status,percentFunded,percentCommitted,contractId,resourceType) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26)",[id, created, modified,lead_userId,lead_fi_Id,lead_name,currentBalanceInPennies,dueBy,retaining,loanType,tags,location_city,location_state,location_street,rate,term,description,amortization,grading,leadFee_serviceFee,leadfee_flatFeeInPennies,status,percentFunded,percentCommitted,contractId,resourceType],(error, results) => {
   if (error) {
     throw error
   }
   response.status(201).send('A new row is inserted in opportunity')
   })
   }

const insertdeal = (request, response) => {
const { id, oppotunityid, percentfunded, percentcommitted, retaining, status, resourcetype, loanstatus } = request.body
  pool.query( "INSERT INTO deal(id,oppotunityid,percentfunded,percentcommitted,retaining,status,resourcetype,loanstatus) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)",[id, oppotunityid, percentfunded, percentcommitted, retaining, status, resourcetype, loanstatus], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in deal')
  })
}

const insertdeal_participant = (request, response) => {
const { id, userid, deal_id, percent, agreementid, resourcetype, fi_id, funded_amountinpennies, funded_date, funded_user_id, funded_name } = request.body
  pool.query( "INSERT INTO deal_participant (id,userid,deal_id,percent,agreementid,resourcetype,fi_id,funded_amountinpennies,funded_date,funded_user_id,funded_name) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)",[id, userid, deal_id, percent, agreementid, resourcetype, fi_id, funded_amountinpennies, funded_date, funded_user_id, funded_name], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in deal_participant')
  })
}

const inserttransfer = (request, response) => {
const { id,amountinpennies,status,feeInpennies,feepaidby,rollupid,moneywas,type,previousprincipalbalanceinpennies,deal_participant_id } = request.body
  pool.query( "INSERT INTO transfer(id,amountinpennies,status,feeInpennies, feepaidby, rollupid, moneywas, type, previousprincipalbalanceinpennies, deal_participant_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,)",[id, amountinpennies, status,feeInpennies, feepaidby, rollupid, moneywas, type, previousprincipalbalanceinpennies,deal_participant_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in transfer')
  })
}

const insertdisbursement = (request, response) => {
const { id, type, amountinpennies, status,feeInpennies,feepaidby,rollupid,moneywas,principalinpennies,disbursementdetails_interestinpennies,borrowerfeesinpennies,sellerfeesinpennies,memo,previousprincipalbalanceinpennies,deal_participant_id} = request.body
  pool.query( "INSERT INTO disbursement (id,type,amountinpennies,status,feeInpennies,feepaidby,rollupid,moneywas,principalinpennies,disbursementdetails_interestinpennies,borrowerfeesinpennies,sellerfeesinpennies,memo,previousprincipalbalanceinpennies,deal_participant_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15)",[id, type, amountinpennies, status,feeInpennies,feepaidby,rollupid, moneywas, principalinpennies, disbursementdetails_interestinpennies, borrowerfeesinpennies, sellerfeesinpennies, memo, previousprincipalbalanceinpennies, deal_participant_id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(201).send('A new row is inserted in disbursement')
  })
}

const insertmessage = (request, response) => {
const {id,dealId,subject,author_userId,author_fiId,author_name,body,created,modified} = request.body
     pool.query( "INSERT INTO message (id,dealId,subject,author_userId,author_fiId,author_name,body,created,modified)VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)",[id,dealId,subject,author_userId,author_fiId,author_name,body,created,modified],(error, results) => {
       if (error) {
         throw error
       }
       response.status(201).send('A new row is inserted in message')
       })
       }

module.exports = {
insertfi,
insertopportunity,
insertdeal,
insertdeal_participant,
inserttransfer,
insertdisbursement,
insertmessage
}
