use anchor_lang::prelude::*;
use anchor_spl::{ token::{self, Transfer}, token::{ Token, TokenAccount }};

pub fn transfer_tokens(ctx: Context<TransferToken>, amount: u64) -> Result<()> 
{
    let cpi_accounts = Transfer 
    {
        from: ctx.accounts.from_ata.to_account_info(),
        to: ctx.accounts.to_ata.to_account_info(),
        authority: ctx.accounts.from.to_account_info(),
    };
    let cpi_program = ctx.accounts.token_program.to_account_info();
    
    token::transfer(CpiContext::new(cpi_program, cpi_accounts), amount)?;

    Ok(())
}

#[derive(Accounts)]
pub struct TransferToken<'info> 
{
    pub from: Signer<'info>,

    #[account(mut)]
    pub from_ata: Account<'info, TokenAccount>,

    #[account(mut)]
    pub to_ata: Account<'info, TokenAccount>,

    pub token_program: Program<'info, Token>
}